import { useSelector } from "react-redux"
import { Accordion } from "../accordion"
import { getMovieSelected } from "../../store"
import { View, Text, StyleSheet } from "react-native"
import React from "react"

export const MovieSelectedDetails = () => {
    const movieSelected = useSelector(getMovieSelected);


    return (
        <>
            <Accordion title={"Cast"}>
                {
                    movieSelected?.cast.map(item =>
                        <View
                            key={item.actorName}
                            style={style.accordionContent}>
                            <Text style={{ color: "#fff" }}>{item.characterName}</Text>
                            <Text style={{ color: "#fff" }}>{item.actorName}</Text>
                        </View>
                    )
                }
            </Accordion>
            {
                Object.entries(movieSelected?.crew ?? {}).map(([index, names]) =>
                    <Accordion title={index} key={index}>
                        {
                            names.map((item: string) => <Text style={{ color: "#fff" }} key={item}>{item}</Text>)
                        }
                    </Accordion>
                )
            }
            <Accordion title={"Classification"}>
                {
                    movieSelected?.classification.advisoryContent.map(item => <Text key={item}>{item}</Text>)
                }
            </Accordion>

        </>
    )
}

const style = StyleSheet.create({
    accordionContent: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    }
})