'use server'

import contactdb, { prodet } from "./lib/cont"

export async function createcont(subject:string , description: string, contact: string, query:string) {
    await contactdb(subject, description,contact,query)
    
}

export async function findprod( id: string){
   return await prodet(id)
}