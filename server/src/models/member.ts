import { Type, typedModel, createSchema } from "ts-mongoose";

const memberSchema = createSchema({
    _id : Type.objectId(),
    fullName : Type.string( {required: true} ),
    email: Type.string({ 
        required: true, 
        unique: true, 
        index: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }),
    created_at: Type.date({ createdAt: true }),
    updated_at: Type.date({ updatedAt: true })
});

export const Member = typedModel('Member', memberSchema);