import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function CompetitionHeroSection({ id }) {
  const [competitionName, setCompetitionName] = useState("");
  const [competitionDescription, setCompetitionDescription] = useState("");

  useEffect(() => {
    const fetchCompetition = async () => {
      const result = await axios.get(
        `${process.env.BASE_URL}/competition/getDetails?id=${id}`
      );
      if (result.data) {
        setCompetitionName(result.data.name);
        setCompetitionDescription(result.data.description);
      }
    };
    fetchCompetition();
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="container py-24 lg:py-32 flex justify-center">
          <div className="text-center max-w-5xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {competitionName}
            </h1>
            <p className="mt-3 text-xl text-center text-muted-foreground">
              {competitionDescription}
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* Form */}
              <form>
                <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                  <div className="flex-[1_0_0%]">
                    <Label htmlFor="article" className="sr-only">
                      Have any questions? Ask away!
                    </Label>
                    <Input
                      name="article"
                      className="h-full"
                      id="article"
                      placeholder="Have any questions? Ask away!"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Button size={"icon"}>
                      <SearchIcon />
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
