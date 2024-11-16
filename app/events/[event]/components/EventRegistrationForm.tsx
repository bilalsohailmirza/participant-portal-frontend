import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export default function EventRegistrationForm() {
  return (
    <div className="mt-16 flex items-center justify-center min-h-screen">
      <Card className="max-w-md w-full p-6 shadow-lg bg-slate-50">
        <CardHeader>
          <CardTitle className="text-center">Event Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-2"
                  required
                />
              </div>
                <div>
                <Label htmlFor="status">Are you a professional or student?</Label>
                <RadioGroup className="mt-2 space-y-2" id="status">
                    <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="professional" />
                    <Label htmlFor="professional">Professional</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student</Label>
                    </div>
                </RadioGroup>
                </div>
                <div>
                    <Label htmlFor="organization">Which organization do you belong to?</Label>
                    <Select>
                    <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your organization" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="nuces">National University of Computer and Emerging Sciences (NUCES)</SelectItem>
                        <SelectItem value="lums">Lahore University of Management Sciences (LUMS)</SelectItem>
                        <SelectItem value="uet">University of Engineering and Technology (UET), Lahore</SelectItem>
                        <SelectItem value="qau">Quaid-e-Azam University, Islamabad</SelectItem>
                        <SelectItem value="pu">University of the Punjab (PU), Lahore</SelectItem>
                        <SelectItem value="comsats">COMSATS Institute of Information Technology, Islamabad</SelectItem>
                        <SelectItem value="nust">National University of Sciences and Technology (NUST), Islamabad</SelectItem>
                        <SelectItem value="iba">Institute of Business Administration (IBA), Karachi</SelectItem>
                        <SelectItem value="giki">Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)</SelectItem>
                        <SelectItem value="aku">Aga Khan University (AKU), Karachi</SelectItem>
                    </SelectContent>
                    </Select>
                </div>            
            </div>
            <Button
              type="submit"
              className="w-full mt-6 bg-blue-500 hover:bg-blue-600"
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
