import React from 'react'

type ValueProp = {
    value: number
}

type NegativeType = ValueProp & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type PositiveType = ValueProp & {
    isNegative?: never
    isPositive: boolean
    isZero?: never
}

type ZeroType = ValueProp & {
    isNegative?: never
    isPositive?: never
    isZero: boolean
}

type RandomNumberProps = NegativeType | PositiveType | ZeroType

export default function RandomNumber({
    value,
    isPositive, 
    isNegative,
    isZero
}: RandomNumberProps) {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
        {isZero && 'zero'}
    </div>
  )
}
