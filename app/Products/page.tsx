import Link from "next/link"
import Category from "../components/ui/Category";
import HealthConcern from "../components/ui/HealthConcern";
import { allprods } from "../lib/cont";
import Image from "next/image";


export default async function Product() {

    const { product } = await allprods()
    if (product) {
        return (
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {/*<h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2> */}
                    <Category />
                    <HealthConcern />
                    {/*<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {product?.map(product => (
                            <div key={product.id} className="group relative">
                                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <Image src={product.image} alt='image' height={500} width={500}  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link href={{ pathname: `/Productdetails/${product.id}`, query: { id: JSON.stringify(product.id) } }}>
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {product.name}
                                            </Link>
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">Rs{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>*/}
                </div>
            </div>
        );
    }
};
