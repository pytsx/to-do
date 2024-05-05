import clsx from "clsx"
import { Circle, Plus } from "lucide-react"
import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string
  callback: (value: string) => void
  variant?: "default" | "ghost"
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ color, callback, variant, disabled, hidden, ...props }, ref) => {
  const [value, setValue] = React.useState<string>("")
  const [active, setActive] = React.useState<boolean>(false)
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    if (newValue == undefined) return null
    setValue(newValue)
  }

  function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code !== "Enter" && (e.code !== "NumpadEnter")) return null
    callback(value)
    setValue("")
  }
  return !hidden && <div
    className={clsx(
      "w-full h-full flex  bg-neutral-900 rounded-sm cursor-text hover:bg-neutral-800 active:bg-neutral-800",
      variant == "ghost" && "bg-transparent"
    )}
    style={{
      color: color,
    }}
  >
    <label
      htmlFor="input"
      className={clsx("flex gap-2 py-4 w-full h-full  select-none")}
    >

      <span className="w-10 flex items-center justify-center select-none ">
        {active
          ? <Circle className="w-5 h-5 " style={{ color: color }} />
          : <Plus className="w-5 h-5 " style={{ color: color }} />
        }
      </span>

      <input
        ref={ref}
        {...props}
        onKeyDown={handleEnterPress}
        type="text"
        value={value}
        disabled={disabled}
        style={{ color: color }}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={handleInputChange}
        id="input"
        className="outline-none text-sm bg-transparent select-none w-full h-full"
        placeholder={`inserir ${props.name ?? ""}`}
      />
    </label>
  </div>
})

Input.displayName = "Input"
export { Input }