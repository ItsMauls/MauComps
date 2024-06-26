'use client'
import React, { useEffect, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { cn } from '@/lib/cn';
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';

const AccordionMenu = ({
    idx,
    trigger,
    subMenu,
    icon,
    className,
    link
}) => {
    const [focusedIndex, setFocusedIndex] = useState(null)
    const inDashboard = link === '/dashboard'

    useEffect(() => {
        setFocusedIndex(0)
    }, [])

    return (
        <Accordion.Root
          key={idx}
            className={cn('bg-mauve w-[300px]', className)}
            type="single"        
            collapsible
            defaultValue=''
        > 
            <AccordionItem value={`item-${idx}`}>
            <AccordionTrigger subMenu={subMenu}>
              <Link href={inDashboard ? '/' : ''}>
                  <div className='flex gap-x-3 items-center'>
                      <span className='text-xl group group-focus:text-green-600'>
                          {icon}
                      </span>
                      {trigger}
                  </div>
                </Link>
            </AccordionTrigger>
            {subMenu.map((val, idx) => {
              return (
                <>
                <Link key={idx} href={`${link}${val.link}`}>
                  <AccordionContent setFocusedIndex={() => setFocusedIndex(idx)} isHovered={focusedIndex === idx} key={idx}>{val.name}</AccordionContent>
                </Link>
                </>
              )
            })}
        
            </AccordionItem>
    
        </Accordion.Root>
    );
}

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={cn(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t-xl last:rounded-b-xl focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));
AccordionItem.displayName = AccordionItem

const AccordionTrigger = React.forwardRef(({ children, subMenu, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={cn(
        'text-violet11 shadow-mauve6 font-medium hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        subMenu.length > 0 && 'data-[state=open]:bg-white data-[state=open]:text-black data-[state=open]:font-bold',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      {subMenu.length > 0 &&
      <FaCaretDown
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      /> }
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = AccordionTrigger

const AccordionContent = React.forwardRef(({ children, setFocusedIndex,className, isHovered, ...props }, forwardedRef) => (
  <Accordion.Content
    onClick={setFocusedIndex}
    className={cn(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      'data-[state=open]:bg-white data-[state=open]:text-gray-500 data-[state=open]:px-4 pt-1',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className={cn(
        "py-[15px] px-5 cursor-pointer data-[state=open]:hover:bg-gray-100 hover:rounded-lg my-1",
        isHovered ? 'bg-gray-100 rounded-lg' : 'hover:bg-gray-200'
    )}>
        {children}
    </div>
  </Accordion.Content>
));
AccordionContent.displayName = AccordionContent

export default AccordionMenu;