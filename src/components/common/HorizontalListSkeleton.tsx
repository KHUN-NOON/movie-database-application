import { Skeleton, Stack } from "@mui/material"

const HorizontalListSkeleton = () => {
    return (
        <Stack spacing={3} direction='row'>
            {
                Array.from({length: 9}, (_, index) => {
                    return <Skeleton key={index} variant="rectangular" width={150} height={300}/>
                })
            }
        </Stack>
    )
}

export default HorizontalListSkeleton