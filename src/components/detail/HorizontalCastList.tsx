import { useRef } from 'react'
import { Box, Typography } from "@mui/material"
import { ViewportList } from 'react-viewport-list'
import CastCard from '../common/CastCard'
import HorizontalListSkeleton from '../common/HorizontalListSkeleton'

interface IProps {
    isLoading: boolean,
    casts: {
        id: string,
        name: string,
        profile_path: string,
        character: string
    }[]
}

const HorizontalCastList = (props: IProps) => {
    const viewPortRef = useRef<HTMLDivElement | null>(null)

    const { isLoading, casts } = props

    return (
        <Box marginY={5}>
            <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" mr={1}>Cast</Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    overflow: 'auto',
                    scrollbarWidth: '6px',
                    '&::-webkit-scrollbar': {
                        width: '8px'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'nowrap',
                        paddingBottom: 2
                    }}
                    ref={viewPortRef}
                >
                    {
                        !isLoading ? 
                        (
                            <ViewportList
                                viewportRef={viewPortRef}
                                items={casts}
                                initialPrerender={10}
                                axis='x'
                            >
                                {(item) => (
                                    <CastCard
                                        key={item.id}
                                        name={item?.name}
                                        profile_path={item?.profile_path}
                                        character={item?.character}
                                    />
                                )}
                            </ViewportList>
                        ) :
                        (
                            <HorizontalListSkeleton/>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default HorizontalCastList