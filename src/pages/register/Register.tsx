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
import IsAuthenticated from "@/routes/helper/IsAuthenticated";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegister } from "./useRegister";

const Register = () => {
  const {
    errors,
    control,
    handleSubmit,
    register,
    onSubmit,
    registerUserMutation,
  } = useRegister();

  return (
    <IsAuthenticated>
      <form
        className="flex justify-center min-h-screen mx-2 sm:px-0"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Card className="w-full max-w-sm m-auto">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
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
                  {...register("email")}
                  type="email"
                  placeholder="Enter Email"
                />
                {errors.email && <Error message={errors.email.message} />}
              </div>
              <div>
                <Label required htmlFor="password">
                  Password
                </Label>
                <Input
                  {...register("password")}
                  type="password"
                  placeholder="Enter Password"
                />
                {errors.password && <Error message={errors.password.message} />}
              </div>
              <div>
                <Label required htmlFor="password_confirmation">
                  Confirm Password
                </Label>
                <Input
                  {...register("password_confirmation")}
                  type="password"
                  placeholder="Enter Confirm Password"
                />
                {errors.password_confirmation && (
                  <Error message={errors.password_confirmation.message} />
                )}
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
                {errors.role_name && (
                  <Error message={errors.role_name.message} />
                )}
              </div>
              <Button
                isLoading={registerUserMutation?.isPending}
                disabled={registerUserMutation?.isPending}
                type="submit"
                className="w-full"
              >
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </IsAuthenticated>
  );
};

export default Register;
