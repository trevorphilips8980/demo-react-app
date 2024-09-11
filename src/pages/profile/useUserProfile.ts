import { AUTH_SERVICE } from "@/services/auth.services";
import { useAuthStore } from "@/store/useAuthStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import * as yup from "yup";

export const useUserProfile = () => {
  const { t } = useTranslation();
  const { loggedInUserDetails, setLoggedInUserDetails } = useAuthStore();

  const userProfileSchema = yup.object().shape({
    name: yup.string().required(t("validationMessage.required")),
    email: yup
      .string()
      .email(t("validationMessage.email"))
      .required(t("validationMessage.required")),
    role_name: yup.mixed().required(t("validationMessage.required")),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userProfileSchema),
    mode: "onChange",
  });

  const formData = watch();

  const updateUserProfileMutation: any = useMutation({
    mutationFn: AUTH_SERVICE.updateProfile,
    onSuccess: (data: any) => {
      const updatedUserData = {
        name: formData?.name as string,
        // @ts-ignore
        role: formData?.role_name?.value as string,
        token: loggedInUserDetails?.token as string,
        email: formData?.email,
      };
      setLoggedInUserDetails(updatedUserData);
      toast.success(data.message);
    },
    onError: (error: any) => toast.error(error?.data),
  });

  useEffect(() => {
    reset({
      name: loggedInUserDetails?.name,
      email: loggedInUserDetails?.email,
      role_name: {
        value: loggedInUserDetails?.role,
        label: loggedInUserDetails?.role,
      },
    });
  }, []);

  const onSubmit = (data: any) => {
    updateUserProfileMutation.mutate({
      name: data?.name,
      role_name: data?.role_name?.value,
    });
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    updateUserProfileMutation,
  };
};
