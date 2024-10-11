"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {insertOneUser} from "../server/user"
import { RadioGroup,RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Boxes } from "@/components/ui/background-boxes";


const FormSchema = z.object({
	name: z.string({
    	required_error: "Please enter a name"
	}).min(2, {
    	message: "name must be more than 2 characters long"
	}).max(20, {
    	message: "name must be no longer than 20 characters"
	}),
	drugs: z.string({
    	required_error: "Please select an option"
	}),
	gender: z.string({
		required_error: "Please select a gender"
	}),
	favourite: z.string({
		required_error: "Please tell me your favorite drugs....plspls"
	})
})

export default function Quiz() {
	const { toast } = useToast();
  console.log(useToast());

	const form = useForm<z.infer<typeof FormSchema>>({
    	resolver: zodResolver(FormSchema)
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
	let isDrugDealer = true;
    if (data.drugs === "yes") {
      console.log('drug dealer!');
        toast({
            title: `Congratulations ${data.name}`,
            description: "You are a drug dealer",
        })
    } else {
      console.log('boooo');
	  isDrugDealer = false;
        toast({
            title: `Thank you ${data.name}`,
            description: "Unfortunately you are not a drug dealer",
        })
    }
	
	insertOneUser(data.name,isDrugDealer);
}


	return (
		<div className="relative flex mt-8 justify-center overflow-hidden">
			<Boxes className="absolute inset-0 z-0"/>
    	<Form {...form}>
        	<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            	<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel className="relative z-10 text-3xl">Question 1:</FormLabel>
                        	<FormDescription className="relative z-10">What is your name?</FormDescription>
                            	<FormControl className="relative z-10">
                                	<Input placeholder="Your name here" {...field}/>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
					control={form.control}
					name="gender"
					render={({field})=>(
						<FormItem>
							<FormLabel className="relative z-10 text-3xl">Question 2:</FormLabel>
							<FormDescription className="relative z-10">What is your gender‼️</FormDescription>
							<RadioGroup className="relative z-10"
								value={field.value} // Control the value
								onValueChange={field.onChange} // Handle value change
								>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="m" id="gender-m" />
									<Label htmlFor="m">Male</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="f" id="gender-f" />
									<Label htmlFor="f">Female</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="n" id="gender-n" />
									<Label htmlFor="n">idw to say....uwu xd</Label>
								</div>
							</RadioGroup>
							<FormMessage/>
						</FormItem>
					)}
				/>
            	<FormField
                	control={form.control}
                	name="drugs"
                	render={({ field }) => (
                    	<FormItem className="relative z-10">
                        	<FormLabel className="relative z-10 text-3xl">Question 3:</FormLabel>
                        	<FormDescription>Do you sell drugs?</FormDescription>
                        	<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl >
                                	<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="yes">Yes</SelectItem>
                                	<SelectItem value="no">No</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="favourite"
                	render={({ field }) => (
                    	<FormItem className="relative z-10">
                        	<FormLabel className="relative z-10 text-3xl">Last Question!!</FormLabel>
                        	<FormDescription>What is your favourite drug?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl>
                                	<SelectTrigger>
                                    	<SelectValue placeholder="PLease select your favoruite druggiessssss"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="alcohol">Alcohol</SelectItem>
                                	<SelectItem value="meth">Meth</SelectItem>
									<SelectItem value="nicotine">Nicotine</SelectItem>
									<SelectItem value="marijuana">Marijuana</SelectItem>
									<SelectItem value="heroin">Heroin</SelectItem>
									<SelectItem value="cocaine">Cocaine</SelectItem>
									<SelectItem value="ecstasy">Ecstasy</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
            	<Button type="submit" className="relative z-10">Submit</Button>
        	</form>
    	</Form>
		</div>
	)
}
