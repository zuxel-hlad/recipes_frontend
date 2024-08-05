import { type EmblaOptionsType } from 'embla-carousel'
import { type DetailedHTMLProps, type HtmlHTMLAttributes } from 'react'

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>, EmblaOptionsType {
    tags: string[]
}
