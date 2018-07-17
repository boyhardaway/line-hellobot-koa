let messageAuction = {
    "type": "flex",
    "altText": "this is a flex message",
    "contents": {
      "type": "bubble",
      "header": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "การประมูล",
            "size": "xl",
            "weight": "bold",
            "color": "#ff5551",
            "align": "center"
          },
          {
            "type": "text",
            "text": "วันที่ 20/6/2018",
            "size": "xl",
            "weight": "bold",
            "color": "#ff5551",
            "align": "center"
          }
        ]
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "action": {
          "type": "uri",
          "uri": "https://linecorp.com"
        },
        "contents": [
          {
            "type": "text",
            "text": "ฟาร์มเพชรบุรี 5",
            "size": "xl",
            "weight": "bold"
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "text": "เวลา 13.00 ",
            "gravity": "center",
            "weight": "bold",
            "size": "xl",
            "color": "#ff5551",
            "flex": 2
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "xs",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://www.picz.in.th/images/2018/06/18/4jZi1W.png"
                  },
                  {
                    "type": "text",
                    "text": "A1-018",
                    "weight": "bold",
                    "margin": "sm",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "Close",
                    "weight": "bold",
                    "size": "sm",
                    "align": "end",
                    "color": "#aaaaaa"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://www.picz.in.th/images/2018/06/19/4jEdPV.png"
                  },
                  {
                    "type": "text",
                    "text": "Size 65",
                    "weight": "bold",
                    "margin": "sm",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "14 Tons",
                    "weight": "bold",
                    "size": "sm",
                    "align": "end",
                    "color": "#aaaaaa"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://www.picz.in.th/images/2018/06/21/4ni1fD.png"
                  },
                  {
                    "type": "text",
                    "text": "ความเค็ม",
                    "weight": "bold",
                    "margin": "sm",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "30",
                    "weight": "bold",
                    "size": "sm",
                    "align": "end",
                    "color": "#aaaaaa"
                  }
                ]
              }
            ]
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "spacer",
            "size": "xxl"
          },
          {
            "type": "button",
            "flex": 2,
            "style": "primary",
            "color": "#ff5551",
            "action": {
              "type": "message",
              "label": "เข้าประมูล",
              "text": "<auction>yes"
            }
          }
        ]
      }
    }
  }

  module.exports = {
    messageAuction
  }