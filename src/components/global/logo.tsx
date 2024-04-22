import Link from "next/link";

function Pytsx({ sup, disableIcon, disableName }: { sup?: string, disableName?: boolean, disableIcon?: boolean }) {
  return (
    <Link aria-label="redirecionar para o criador do site" href={""}>
      <div className="flex flex-row gap-1 select-none">
        {!disableIcon && (<span className="p-2 border border-neutral-600 rounded-md w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg"
            aria-label={`${process.env.SITE_NAME} logo`}
            viewBox="0 0 93 93"
            className={" h-3 w-3 fill-neutral-950 dark:fill-neutral-500"}
          >
            <path d={"M46.0331 10.9904C42.667 10.9904 39.7902 12.1828 37.4026 14.5675C35.0151 16.9622 33.8213 19.8378 33.8213 23.2044C33.8213 26.571 35.0151 29.4466 37.4026 31.8313C39.7902 34.2159 42.667 35.4082 46.0331 35.4082H46.0919C49.458 35.4082 52.3348 34.2159 54.7224 31.8313C57.1099 29.4466 58.3037 26.571 58.3037 23.2044C58.3037 19.8378 57.1099 16.9622 54.7224 14.5675C52.3348 12.1828 49.458 10.9904 46.0919 10.9904H46.0331ZM78.6177 13.9863C84.567 20.0481 88.2855 26.0198 89.7728 31.8913C91.2993 37.7227 92.0625 42.5923 92.0625 46.51C92.0625 50.3475 91.6124 54.0447 90.7121 57.6017H45.5048V92.54C39.9076 92.54 34.3105 91.4179 28.7134 89.1935C23.1163 86.9191 18.0476 83.5524 13.5073 79.0937C7.51879 72.9817 3.78086 67.0201 2.29351 61.1886C0.806174 55.3172 0.0625 50.4177 0.0625 46.51C0.0625 42.6324 0.571325 38.7348 1.58899 34.8271C3.54601 27.0319 7.51879 20.0882 13.5073 13.9863C19.6132 7.99455 25.5821 4.25729 31.4142 2.77439C37.2852 1.28147 42.1778 0.540039 46.0919 0.540039C49.9668 0.540039 53.8613 1.05106 57.7754 2.06304C65.5643 4.02688 72.5118 7.99455 78.6177 13.9863Z"}
            />;
          </svg>
        </span>)}
        {!disableName && (
          <h1 className="my-auto uppercase text-md font-semibold ml-2 text-neutral-300">pytsx</h1>
        )}
        {sup && (
          <sup className="  text-[10px] text-center m-auto uppercase font-semibold text-neutral-500">
            {sup}
          </sup>
        )}
      </div>
    </Link>
  )
}

Pytsx.displayName = "Pytsx"
export {
  Pytsx
}