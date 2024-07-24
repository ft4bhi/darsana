"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { QueryResult } from "@upstash/vector";
import type { Product as TProduct } from "@/db";

import Product from "@/components/product/Product";
import ProductSkall from "@/components/product/ProductSkall";
import { Accordion, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import { ProductState } from "@/lib/validater/product-validator";
import { Slider } from "@/components/ui/slider";
import { set } from "zod";
import { useEffect } from "react";

const SORT_OPTION = [
  { name: "None", value: "none" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" }
] as const;

const COLOR_FILTER = {
  id: "color",
  name: "Color",
  options: [
    { value: "white", Label: "White" },
    { value: "beige", Label: "Beige" },
    { value: "blue", Label: "Blue" },
    { value: "green", Label: "Green" },
    { value: "purple", Label: "Purple" }
  ] as const,
}

const SIZE_FILTER = {
  id: "color",
  name: "Color",
  options: [
    { value: "S", Label: "S" },
    { value: "M", Label: "M" },
    { value: "L", Label: "L" },

  ],
} as const

const PRICE_FILTER = {
  id: "price",
  name: "price",
  options: [
    { value: [0, 100], Label: "Any price" },
    { value: [0, 20], Label: "under 20" },
    { value: [0, 40], Label: "under 40" },
    //costum price

  ],
} as const

const SUBCATEGORIES = [
  { name: "T-shirts", Selected: true, href: "#" },
  { name: "Hoodies", Selected: false, href: "#" },
  { name: "Sweatshirts", Selected: false, href: "#" },
  { name: "Accessories", Selected: false, href: "#" }
]

const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number]

type FilterCategory = 'color' | 'size' | 'price';

export default function Home() {
  const [filter, setFilter] = useState<ProductState>({
    color: ['beige', 'blue', 'green', 'purple', 'white'],
    price: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
    size: ['S', 'M', 'L'],
    sort: 'none',
  });

  console.log(filter);

  const { data: products, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.post<QueryResult<TProduct>[]>(
        'http://localhost:3000/api/products', {
        filter: {
          sort: filter.sort,
          color: filter.color,
          size: filter.size,
          price: filter.price.range,
        }
      })
      return data
    },
  });

  const onSubmit = () => refetch()

  useEffect(() => {

    onSubmit()
  }, [filter]);

  const applyArrayFilter = ({
    category, value
  }: {
    category: keyof Omit<typeof filter, "price" | "sort">
    value: string
  }) => {
    if (Array.isArray(filter[category])) {
      const isFilterApplied = (filter[category] as string[]).includes(value as never);
      if (isFilterApplied) {
        setFilter((prev) => ({
          ...prev,
          [category]: (prev[category] as string[]).filter((v) => v !== value)
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          [category]: [...(prev[category] as string[]), value]
        }));
      }
    }

  }

  const minPrice = Math.min(filter.price.range[0], filter.price.range[1])
  const maxPrice = Math.max(filter.price.range[0], filter.price.range[1])

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          High-Quality Cotton Selection
        </h1>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Sort
              <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {SORT_OPTION.map((option) => (
                <button key={option.name}
                  className={cn("text-left w-full block text-sm px-4 py-2", {
                    'text-gray-900 bg-gray-300': option.value === filter.sort,
                    'bg-gray-100': option.value !== filter.sort,
                  })}
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: option.value,
                    }))
                  }}>{option.name}</button>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filter */}
          <div className="hidden lg:block">
            <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
              {SUBCATEGORIES.map((category) => (
                <li key={category.name}>
                  <button disabled={!category.Selected} className="disabled:cursor-not-allowed disabled:opacity-60">{category.name}</button>
                </li>
              ))}
            </ul>

            <Accordion type='single' collapsible={true} className='animate-none'>
              {/* Color Filter */}
              <AccordionItem value='color'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Color</span>
                </AccordionTrigger>
                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {COLOR_FILTER.options.map((option, optionIdx) => (
                      <li key={option.value} className='flex items-center'>

                        <input type="checkbox"
                          id={`color-${optionIdx}`}
                          onChange={() => {
                            applyArrayFilter({
                              category: "color",
                              value: option.value
                            })
                          }}
                          checked={filter.color.includes(option.value)}
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                        <label htmlFor={`color-${optionIdx}`} className='ml-3 text-sm text-gray-600'>
                          {option.Label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* size Filter */}
              <AccordionItem value='size'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>Size</span>
                </AccordionTrigger>
                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {SIZE_FILTER.options.map((option, optionIdx) => (
                      <li key={option.value} className='flex items-center'>

                        <input type="checkbox"
                          id={`size-${optionIdx}`}
                          onChange={() => {
                            applyArrayFilter({
                              category: 'size',
                              value: option.value
                            })
                          }}
                          checked={filter.size.includes(option.value)}
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                        <label htmlFor={`color-${optionIdx}`} className='ml-3 text-sm text-gray-600'>
                          {option.Label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* price Filter */}
              <AccordionItem value='price'>
                <AccordionTrigger className='py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>price</span>
                </AccordionTrigger>
                <AccordionContent className='pt-6 animate-none'>
                  <ul className='space-y-4'>
                    {PRICE_FILTER.options.map((option, optionIdx) => (
                      <li key={option.Label} className='flex items-center'>

                        <input type='radio'
                          id={`price-${optionIdx}`}
                          onChange={() => {
                            setFilter((prev) => ({
                              ...prev,
                              price: {
                                isCustom: false,
                                range: [...option.value]
                              }
                            }))
                          }}
                          checked={
                            !filter.price.isCustom &&
                            filter.price.range
                            [0] === option.value[0] && filter.price.range
                            [1] === option.value[1]
                          }
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                        <label htmlFor={`color-${optionIdx}`} className='ml-3 text-sm text-gray-600'>
                          {option.Label}
                        </label>
                      </li>
                    ))}

                    <li className='flex justify-center flex-col gap-2'>
                      <div>
                        <input type='radio'
                          id={`price-${PRICE_FILTER.options.length}`}
                          onChange={() => {
                            setFilter((prev) => ({
                              ...prev,
                              price: {
                                isCustom: true,
                                range: [0, 100]
                              }
                            }))
                          }}
                          checked={filter.price.isCustom}
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                        <label htmlFor={`color-${PRICE_FILTER.options.length}`} className='ml-3 text-sm text-gray-600'>
                          Custom
                        </label>
                      </div>
                      <div className='flex justify-between'>
                        <p className=" font-medium">Price</p>
                        <div>
                          {filter.price.isCustom ? minPrice.toFixed(0) :
                            filter.price.range[0].toFixed(0)} -{' '}
                          {filter.price.isCustom ? maxPrice.toFixed(0) :
                            filter.price.range[1].toFixed(0)
                          }
                        </div>
                      </div>

                      <Slider className={cn({ 'opacity-50': !filter.price.isCustom })}
                        disabled={!filter.price.isCustom}
                        onValueChange={(range) => {
                          const [newMin, newMax] = range
                          setFilter((prev) => ({
                            ...prev,
                            price: {
                              isCustom: true,
                              range: [newMin, newMax]
                            }
                          }))
                        }}
                        value={filter.price.isCustom ? filter.price.range : DEFAULT_CUSTOM_PRICE}
                        min={DEFAULT_CUSTOM_PRICE[0]}
                        defaultValue={DEFAULT_CUSTOM_PRICE}
                        max={DEFAULT_CUSTOM_PRICE[1]}
                      />

                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Product Code */}
          <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products ? products.map((product) => (
              <Product key={product.metadata!.id} product={product.metadata!} />
            )) :
              new Array(12).fill(null).map((_, i) => (
                <ProductSkall key={i} />
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
