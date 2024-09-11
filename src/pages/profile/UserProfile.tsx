import Error from "@/components/error";
import { FormSelect } from "@/components/form-select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { roles } from "@/constants/userRole";
import { Controller } from "react-hook-form";
import { useUserProfile } from "./useUserProfile";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    updateUserProfileMutation,
  } = useUserProfile();

  return (
    <form
      className="flex justify-center min-h-screen mx-2 sm:px-0"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Card className="w-full max-w-sm m-auto">
        <CardHeader>
          <CardTitle className="text-xl">Edit Profile</CardTitle>
          <CardDescription>
            Enter your information to update the profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <Label required htmlFor="name">
                Name
              </Label>
              <Input
                {...register("name")}
                type="text"
                placeholder="Enter Name"
              />
              {errors.name && <Error message={errors.name.message} />}
            </div>
            <div>
              <Label required htmlFor="email">
                Email
              </Label>
              <Input
                disabled
                {...register("email")}
                type="email"
                placeholder="Enter Email"
              />
              {errors.email && <Error message={errors.email.message} />}
            </div>
            <div>
              <Label required htmlFor="role_name">
                Role
              </Label>
              <Controller
                control={control}
                name="role_name"
                render={({ field: { onChange, value } }) => (
                  <FormSelect
                    placeholder="Select Role"
                    value={value}
                    isClearable
                    onChange={(val: any) => onChange(val)}
                    className="mt-1"
                    options={roles?.map((item: any) => {
                      return { label: item, value: item };
                    })}
                  />
                )}
              />
              {errors.role_name && <Error message={errors.role_name.message} />}
            </div>
            <Button
              isLoading={updateUserProfileMutation.isPending}
              disabled={updateUserProfileMutation.isPending}
              type="submit"
              className="w-full"
            >
              Update Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default UserProfile;
