import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <nav className="h-20 flex items-center">
        <div className="w-[95%] mx-auto max-w-[1300px] flex items-center justify-between">
          <h2>PureAthletics</h2>
        </div>
      </nav>
      <section className="bg-[url(/bg.svg)] bg-center bg-cover h-[90vh]">
        <div></div>
      </section>
      <section className="py-24">
        <div className="w-[94%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-xl">
            <img src="/shirt.png" className="object-cover rounded-xl"></img>
            <div className="p-10 pt-0">
              <h2 className="font-semibold">Performance Shirt</h2>
              <p className="mb-4 text-gray-600">Unleash full potential</p>
              <h3 className="font-bold">239 kr.</h3>
            </div>
          </div>
          <div className="border rounded-xl">
            <img src="/shirt.png" className="object-cover rounded-xl"></img>
            <div className="p-10 pt-0">
              <h2 className="font-semibold">Performance Shirt</h2>
              <p className="mb-4 text-gray-600">Unleash full potential</p>
              <h3 className="font-bold">239 kr.</h3>
            </div>
          </div>
          <div className="border rounded-xl">
            <img src="/shirt.png" className="object-cover rounded-xl"></img>
            <div className="p-10 pt-0">
              <h2 className="font-semibold">Performance Shirt</h2>
              <p className="mb-4 text-gray-600">Unleash full potential</p>
              <h3 className="font-bold">239 kr.</h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
