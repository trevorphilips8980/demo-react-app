import Error from "@/components/error";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IsAuthenticated from "@/routes/helper/IsAuthenticated";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

const Login = () => {
  const { errors, handleSubmit, register, onSubmit, loginMutation } =
    useLogin();
  return (
    <IsAuthenticated>
      <form
        className="flex justify-center min-h-screen mx-2 sm:px-0"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Card className="w-full max-w-sm m-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Please enter your email and password.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
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
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              isLoading={loginMutation.isPending}
              disabled={loginMutation.isPending}
              className="block w-full"
            >
              Sign in
            </Button>
            <div className="my-2 text-sm text-center">
              Don't have an account?{" "}
              <Link to="/register" className="underline">
                Sign Up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </form>
    </IsAuthenticated>
  );
};

export default Login;
