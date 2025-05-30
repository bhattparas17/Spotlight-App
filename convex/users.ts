import {mutation} from "./_generated/server";
import {v} from "convex/values";

export const createUser = mutation({
    args:{
        username:v.string(),
        fullname:v.string(),
        image:v.string(),
        bio:v.optional(v.string()),
        email:v.string(),
        clerkId:v.string(),
    },

    handler:async(ctx,args) => {

        //check if user already exists in db
        const existingUser=await ctx.db.query("users")
        .withIndex("by_clerkId",(q)=>q.eq("clerkId",args.clerkId))
        .first();

        if(existingUser) return
        //create a user in db
        await ctx.db.insert("users",{
            username:args.username,
            fullname:args.fullname,
            image:args.image,
            bio:args.bio,
            email:args.email,
            clerkId:args.clerkId,
            followers:0,
            following:0,
            posts:0,
        });
    }
});