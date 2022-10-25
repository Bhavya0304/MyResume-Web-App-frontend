import { Stdin } from "./Stdin";
import { Stdout } from "./Stdout";

export interface Shell{
    prompt:string,
    input:string|null,
    output:string
}