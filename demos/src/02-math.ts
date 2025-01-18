export function sum (a: number, b:number): number {
  return a + b
}

export function multiplay (a: number, b:number): number {
  return a * b
}

export function divide (a: number, b:number): number | null {
  if (b === 0) {
    return null
  }
  return a / b
}

export function square (a: number, b: number): number {
  return a ** b
};
