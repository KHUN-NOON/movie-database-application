import { Card, CardMedia, CardActionArea, CardContent, Typography } from "@mui/material"
import { posterPath } from "../../configs/apiEndpoints"
import userImage from '../../assets/icons/user.png'

interface ICastCard {
    "name": string,
    "profile_path": string,
    "character": string,
}

const CastCard = (props: ICastCard) => {
    
    return (
        <Card sx={{ minWdth: {sm: 150, xs: 100}, width: {sm: 150, xs: 100}} }>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='100%'
                    width='100%'
                    alt='movie-thumbnail'
                    src={props.profile_path ? posterPath + props.profile_path : userImage}
                    loading="lazy"
                />
            </CardActionArea>
            <CardContent sx={{ paddingBottom: 0 }}>
                <Typography fontSize='16px' noWrap>
                    {props.name}
                </Typography>
                <Typography fontSize={'14px'} color='GrayText'>{props.character}</Typography>
            </CardContent>
        </Card>
    )
}

export default CastCard