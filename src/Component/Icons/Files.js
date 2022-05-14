export default function Files({
    size = 18,
    color = 'black',
}) {
    return ( <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        width = { size }
        height = { size }
        fill={color} > < path fill = "none"
        d = "M0 0h24v24H0z" / > < path d = "M21 9v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1h6zm0-2h-5V2.003L21 7zM8 7v2h3V7H8zm0 4v2h8v-2H8zm0 4v2h8v-2H8z" / > </svg>
    )
}