import { db } from './db';

async function contactdb(subject: string, description: string, contact: string, query: string) {
  try {
    const cont = await db.contact.create({
      data: {
        subject,
        description,
        contact,
        query,
      },
    })
    return { cont }
  } catch (error) {
    return { error }
  }
}
export default contactdb



export async function allprods() {
  try {

    const product = await db.product.findMany(
    );
    return { product }
  } catch (error) {
    return { error }
  }
}



export async function prodet(id:string ) {
  try {

    const product = await db.product.findUnique({
      where: { id: String(id) },
    }
    );
    return { product }
  } catch (error) {
    return { error }
  }
}
