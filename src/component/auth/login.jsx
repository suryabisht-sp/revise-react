import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const LoginForm=()=> {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100">
      <div className="w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <svg
            className="mx-auto h-12 w-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              fill="#FF7A00"
              stroke="#FF7A00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="#FF7A00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="#FF7A00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">AUTOMATION COE</h1>
        </div>
        <Card className="w-full">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-center">Sign In</h2>
            <p className="text-sm text-muted-foreground text-center">
              Please login to continue to your account.
            </p>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email*
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="JohnDoe@technoprism.in"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password*
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              SIGN IN
            </Button>
            <a
              href="#"
              className="mt-4 text-sm text-center text-orange-600 hover:underline"
            >
              Forgot Password?
            </a>
          </CardFooter>
        </Card>
        <p className="mt-4 text-xs text-center text-gray-600">
          Copyright © 2024 Technoprism. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default LoginForm