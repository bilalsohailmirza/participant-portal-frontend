import axios from "axios"
// require('dotenv')
export const fetchSocietyDetails = async (path:string, id:string) => {
    // console.log("Path inside fetching file: ", `${process.env.BASE_URL}/${path}`)

    const result = await axios.get(`${process.env.BASE_URL}/${path}?societyId=${id}`)
    console.log(result)
    return result;
}

export const fetchEvents = async () => {
    const result = await axios.get(`${process.env.BASE_URL + "/events/getEventBySocietyId/"}`)
    return result;
}
;