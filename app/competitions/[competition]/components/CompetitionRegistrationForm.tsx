// 'use client'


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
import axios from "axios";
import { useState, useEffect } from "react";

export function CompetitionRegistrationForm({id, token}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [activityId, setActivityId] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      const result = await axios.get(`${process.env.BASE_URL}/events/getDetails?id=${id}`)
      {
        const opt = result.data ? setActivityId(result.data.activityId): "";
        console.log(opt)
      }
    } 
    fetchEvent()
  }, [id])

  const handleSubmit = async () => {
    
    try{

      const result = await axios.post(`${process.env.BASE_URL}/users/participants`, 
        {
          fullName: name,
          email: email,
          phone: phone,
          organization: organization,
          isStudent: true,
          activityId: activityId,
        },
          {headers: {
            Authorization: `Bearer ${token}`
          }}
      )
      if (result.status === 201){
        alert("You have been registered sucessfully");
      }
      }catch(error) {
        console.log(error)
        alert(error)
      }

  }
  return (
    <Card className="mx-auto max-w-lg my-8">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="text">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Phone</Label>
            <Input
              id="phone"
              type="text"
              placeholder="03-xxxxxxxxx"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Organization</Label>
            <Input
              id="organization"
              type="text"
              placeholder="example organization"
              required
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Register
          </Button>
          
        </div>
      </CardContent>
    </Card>
  );
}
