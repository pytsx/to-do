"use client"

import { cn } from "@/lib/utils"
import React from "react"

interface EditableTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  callback: (value: string) => void
  value: string
}

const EditableText = React.forwardRef<HTMLParagraphElement, EditableTextProps>(({
  contentEditable,
  callback,
  value,
  children,
  className,
  ...props
}, ref) => {

  function handleOnBlur(e: React.FocusEvent<HTMLParagraphElement, Element>) {
    const innerText = e.target.innerText
    const newValue = innerText == undefined || innerText.trim() == "" ? value : innerText
    callback(newValue)
  }

  return (
    <p
      contentEditable={contentEditable != undefined ? contentEditable : true}
      onBlur={handleOnBlur}
      {...props}
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: value
      }}
      className={cn([contentEditable !== false && "cursor-text"], className)}
    />
  )
})


EditableText.displayName = "EditableText"
export {
  EditableText
}