import { ContainerMovie } from "../../interfaces"
import { Carusel } from "../carusel"
import { Header } from "../header/header.component"

interface SectionsProps {
    index: number,
    item: ContainerMovie
}
export const Sections = ({ index, item }: SectionsProps) => {
    if (index === 0) return <Header data={item.items[0]}/>
    else return <Carusel data={item}/>
}
