import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import image from "@/assets/itdepends.png"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AboutMe() {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Curteis
                </CardTitle>
                <CardDescription>
                    I like to code lots
                </CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={image} alt="pants"></Image>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Curteis
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Alert>
          <Terminal></Terminal>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>Hello!</AlertDescription>
        </Alert>
    </div>
  );
}