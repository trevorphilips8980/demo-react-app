import {
  AUTH_SERVICE,
  LoginData,
  LoginResponse,
} from "@/services/auth.services";
import { useAuthStore } from "@/store/useAuthStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

export const useLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setLoggedInUserDetails } = useAuthStore();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email(t("validationMessage.email"))
      .required(t("validationMessage.required")),

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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const loginMutation = useMutation<LoginResponse, Error, LoginData>({
    mutationFn: AUTH_SERVICE.login,
    onSuccess: (data) => {
      toast.success(data?.message);
      setLoggedInUserDetails({
        token: data.data.token,
        role: data.data.role_name,
        email: data.data.email,
        name: data.data.name,
      });
      navigate("/");
    },
    onError: (error: any) => toast.error(error?.data?.message),
  });

  const onSubmit = (data: LoginData) => loginMutation.mutate(data);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loginMutation,
  };
};
