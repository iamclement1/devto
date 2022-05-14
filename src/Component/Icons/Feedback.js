export default function Feedback({
    size = 18,
    color = 'black',
}) {
    return ( <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        width = {size}
        height = {size}
        fill = {color}> < path fill = "none"
        d = "M0 0h24v24H0z" / > < path d = "M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 13v2h2v-2h-2zm0-6v5h2V7h-2z" / > </svg>
    )
}