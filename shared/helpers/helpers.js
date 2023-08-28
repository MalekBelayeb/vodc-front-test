import axios from "axios";

export const chatbotFlowResultsCodingSchool = async () =>{

return await axios
.get("http://odctour.gos.orange.com:443/api/v1/getChatbotFlow", {
  params: {
    country: "tn",
    type: "CodingSchool",
  },
})
}

export const chatbotFlowResultsOrangeFab = async () =>{

  return await axios
  .get("http://odctour.gos.orange.com:443/api/v1/getChatbotFlow", {
    params: {
      country: "tn",
      type: "OrangeFab",
    },
  })
  }

  export const chatbotFlowResultsFabLab = async () =>{

    return await axios
    .get("http://odctour.gos.orange.com:443/api/v1/getChatbotFlow", {
      params: {
        country: "tn",
        type: "FabLab",
      },
    })
    }
