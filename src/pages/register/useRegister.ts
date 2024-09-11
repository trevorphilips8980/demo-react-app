import { AUTH_SERVICE } from "@/services/auth.services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

export const useRegister = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const registerUserSchema = yup.object().shape({
    name: yup.string().required(t("validationMessage.required")),
    email: yup
      .string()
      .email(t("validationMessage.email"))
      .required(t("validationMessage.required")),
    role_name: yup.mixed().required(t("validationMessage.required")),
    password: yup
      .string()
      .required(t("validationMessage.required"))
      .typeError("")
      .min(8, t("validationMessage.passwordMinLength"))
      .max(20, t("validationMessage.passwordMaxLength"))
      .matches(/[a-z]+/, t("validationMessage.lowerCase"))
      .matches(/[A-Z]+/, t("validationMessage.upperCase"))
      .matches(/[@$!%*#?&]+/, t("validationMessage.specialCharacter"))
      .matches(/\d+/, t("validationMessage.oneNumber")),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], t("validationMessage.passwordMatch"))
      .required(t("validationMessage.required")),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
    mode: "onChange",
  });

  const registerUserMutation = useMutation({
    mutationFn: AUTH_SERVICE.register,
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate("/login");
    },
    onError: (error: any) => toast.error(error?.data),
  });

  const onSubmit = (data: any) => {
    const formattedData = {
      ...data,
      role_name: data?.role_name?.value,
    };
    registerUserMutation.mutate(formattedData);
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    registerUserMutation,
  };
};
