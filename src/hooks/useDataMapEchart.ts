export function useDataMapEchart(type: string, name: string, dataInfo: any) {
  let option = {}
  if (type === "pie") {
    dataInfo.map((item: any) => {
      item.value = item.goodsCount
      delete item.goodsCount
      delete item.id
    })
    option = {
      tooltip: {
        trigger: "item"
      },
      legend: {
        top: "5%",
        left: "center"
      },
      series: [
        {
          name: name,
          type: type,
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2
          },
          label: {
            show: false,
            position: "center"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          data: dataInfo
        }
      ]
    }
  }
  if (type === "scatter") {
    dataInfo.map((item: any) => {
      item.name = item.address
      item.value = item.count
      delete item.address
      delete item.count
    })
    console.log(dataInfo)
    const geoCoordMap: any = {
      北京: [116.41, 40.19],
      上海: [121.47, 31.24],
      西安: [108.79, 34.11],
      深圳: [114.13, 22.65],
      广州: [113.54, 23.35],
      武汉: [114.34, 30.62],
      杭州: [119.47, 29.9],
      郑州: [113.47, 34.63],
      南京: [118.84, 31.93],
      天津: [117.33, 39.29],
      苏州: [120.65, 31.38],
      成都: [103.93, 30.65],
      长沙: [113.15, 28.23],
      合肥: [117.36, 31.76],
      宁波: [121.46, 29.74],
      福州: [119.18, 26.05],
      青岛: [120.14, 36.45],
      泉州: [118.26, 25.2],
      厦门: [118.12, 24.68],
      东莞: [113.88, 22.94],
      重庆: [107.87, 30.06],
      南通: [121.02, 32.19],
      佛山: [112.94, 23.01],
      无锡: [120.08, 31.53],
      济南: [117.21, 36.64],
      温州: [120.44, 27.9],
      嘉兴: [120.8, 30.62],
      南昌: [116.02, 28.65],
      昆明: [102.87, 25.39],
      太原: [112.32, 37.96],
      绍兴: [120.64, 29.74],
      南宁: [108.46, 23.06],
      扬州: [119.47, 32.74],
      兰州: [103.65, 36.35],
      石家庄: [114.44, 38.13],
      廊坊: [116.63, 39.26],
      沈阳: [123.14, 42.09],
      徐州: [117.52, 34.36],
      常州: [119.64, 31.63],
      金华: [119.95, 29.12],
      中山: [113.38, 22.52],
      保定: [115.17, 39.02],
      长春: [125.77, 44.38],
      哈尔滨: [127.96, 45.64],
      盐城: [120.18, 33.51],
      台州: [121.11, 28.77],
      潍坊: [119.07, 36.55],
      惠州: [114.5, 23.24],
      贵阳: [106.71, 26.84],
      大连: [122.21, 39.59],
      淮安: [118.96, 33.35],
      泰州: [120.06, 32.57],
      湖州: [119.87, 30.74],
      银川: [106.35, 38.28],
      唐山: [118.34, 39.72],
      邯郸: [114.54, 36.55],
      镇江: [119.45, 32.02],
      宿迁: [118.52, 33.78],
      阜阳: [115.7, 32.92],
      莆田: [118.89, 25.45],
      烟台: [120.8, 37.24],
      济宁: [116.73, 35.37],
      临沂: [118.28, 35.31],
      洛阳: [112.03, 34.29],
      汕头: [116.58, 23.33],
      江门: [112.67, 22.28],
      海口: [110.42, 19.83],
      沧州: [116.75, 38.27],
      呼和浩特: [111.5, 40.59],
      连云港: [119.13, 34.53],
      许昌: [113.71, 34.07],
      珠海: [113.36, 22.17],
      湛江: [110.16, 21.1],
      咸阳: [108.39, 34.78],
      邢台: [114.82, 37.21],
      包头: [110.26, 41.55],
      芜湖: [118.13, 31.16],
      滁州: [118.1, 32.54],
      漳州: [117.44, 24.37],
      淄博: [118.05, 36.61],
      日照: [119.14, 35.58],
      开封: [114.54, 34.6],
      黄石: [115.03, 29.93],
      襄阳: [111.94, 31.93],
      荆州: [112.57, 30.0],
      衡阳: [112.57, 26.79],
      肇庆: [112.21, 23.54],
      梅州: [116.08, 24.2],
      揭阳: [116.12, 23.34],
      柳州: [109.37, 24.95],
      桂林: [110.51, 25.35],
      三亚: [109.42, 18.39],
      宝鸡: [107.2, 34.38],
      渭南: [109.85, 34.95],
      榆林: [109.57, 38.04],
      西宁: [101.44, 36.83],
      秦皇岛: [119.19, 40.09],
      衡水: [115.82, 37.76],
      鞍山: [123.01, 40.71],
      丹东: [124.4, 40.54],
      吉林: [126.84, 43.58],
      衢州: [118.67, 28.93],
      舟山: [122.19, 30.09],
      安庆: [116.49, 30.58],
      六安: [116.23, 31.66],
      亳州: [116.18, 33.44],
      宁德: [119.47, 26.97],
      萍乡: [113.9, 27.51],
      九江: [115.45, 29.32],
      赣州: [115.27, 25.71],
      泰安: [117.03, 36.0],
      德州: [116.65, 37.25],
      聊城: [115.88, 36.46],
      菏泽: [115.69, 35.15],
      平顶山: [113.01, 33.8],
      焦作: [113.13, 35.12],
      漯河: [113.9, 33.66],
      南阳: [112.28, 33.04],
      信阳: [114.88, 32.08],
      周口: [114.88, 33.72],
      驻马店: [114.15, 32.92],
      宜昌: [111.14, 30.75],
      荆门: [112.61, 31.07],
      孝感: [113.88, 31.12],
      株洲: [113.52, 27.12],
      湘潭: [112.6, 27.73],
      岳阳: [113.25, 29.07],
      常德: [111.52, 29.3],
      娄底: [111.61, 27.74],
      茂名: [110.95, 22.02],
      河源: [114.96, 24.04],
      清远: [112.87, 24.31],
      云浮: [111.79, 22.82],
      北海: [109.33, 21.68],
      钦州: [109.02, 22.18],
      攀枝花: [101.73, 26.81],
      绵阳: [104.7, 31.85],
      张家口: [115.03, 40.87],
      承德: [117.55, 41.35],
      大同: [113.72, 39.9],
      长治: [112.92, 36.48],
      晋城: [112.71, 35.61],
      晋中: [112.96, 37.33],
      运城: [111.06, 35.19],
      忻州: [112.41, 38.88],
      临汾: [111.38, 36.23],
      吕梁: [111.26, 37.68],
      乌海: [106.87, 39.43],
      赤峰: [118.87, 43.22],
      通辽: [121.57, 43.82],
      鄂尔多斯: [108.63, 39.41],
      呼伦贝尔: [121.2, 49.66],
      本溪: [124.57, 41.23],
      锦州: [121.61, 41.46],
      盘锦: [122.0, 41.08],
      铁岭: [124.17, 42.64],
      四平: [124.47, 43.57],
      通化: [125.95, 41.96],
      白山: [127.29, 42.07],
      松原: [124.48, 44.8],
      延边朝鲜族自治州: [129.12, 43.14],
      齐齐哈尔: [124.55, 47.7],
      大庆: [124.7, 46.35],
      牡丹江: [129.89, 44.6],
      蚌埠: [117.33, 33.11],
      淮南: [116.77, 32.47],
      马鞍山: [118.37, 31.64],
      淮北: [116.74, 33.73],
      铜陵: [117.56, 30.88],
      宿州: [117.21, 33.86],
      宣城: [118.85, 30.69],
      南平: [118.14, 27.34],
      龙岩: [116.74, 25.29],
      景德镇: [117.27, 29.31],
      新余: [114.85, 27.85],
      鹰潭: [117.11, 28.22],
      吉安: [114.82, 26.97],
      宜春: [114.97, 28.31],
      抚州: [116.43, 27.51],
      上饶: [117.47, 28.77],
      枣庄: [117.39, 34.92],
      东营: [118.6, 37.62],
      滨州: [117.84, 37.53],
      安阳: [114.35, 35.88],
      鹤壁: [114.31, 35.72],
      新乡: [114.09, 35.26],
      濮阳: [115.28, 35.81],
      三门峡: [111.11, 34.36],
      商丘: [115.7, 34.29],
      济源: [112.39, 35.1],
      十堰: [110.44, 32.46],
      鄂州: [114.76, 30.33],
      黄冈: [115.34, 30.72],
      咸宁: [114.18, 29.62],
      随州: [113.42, 31.83],
      恩施土家族苗族自治州: [109.5, 30.19],
      仙桃: [113.38, 30.29],
      天门: [113.11, 30.64],
      邵阳: [110.87, 26.91],
      张家界: [110.53, 29.39],
      益阳: [111.95, 28.58],
      郴州: [113.14, 25.81],
      永州: [111.73, 25.77],
      汕尾: [115.53, 23.01],
      阳江: [111.77, 22.04],
      防城港: [108.0, 21.88],
      贵港: [110.0, 23.31],
      玉林: [110.18, 22.44],
      百色: [106.29, 23.99],
      儋州: [109.4, 19.57],
      自贡: [104.68, 29.29],
      泸州: [105.67, 28.44],
      德阳: [104.44, 31.13],
      遂宁: [105.47, 30.63],
      乐山: [103.57, 29.22],
      南充: [106.2, 31.2],
      眉山: [103.76, 29.93],
      宜宾: [104.64, 28.57],
      达州: [107.64, 31.37],
      遵义: [107.08, 28.17],
      黔西南布依族苗族自治州: [105.46, 25.27],
      黔东南苗族侗族自治州: [108.56, 26.51],
      黔南布依族苗族自治州: [107.25, 26.01],
      曲靖: [103.94, 25.7],
      丽江: [100.52, 26.94],
      普洱: [100.72, 23.19],
      大理白族自治州: [100.04, 25.73],
      铜川: [109.03, 35.2],
      延安: [109.32, 36.44],
      汉中: [107.1, 33.09],
      安康: [108.93, 32.76],
      商洛: [109.9, 33.65],
      武威: [103.06, 38.17],
      平凉: [106.65, 35.31],
      酒泉: [96.06, 40.26],
      庆阳: [107.59, 36.16],
      定西: [104.45, 35.12],
      石嘴山: [106.51, 39.01],
      固源: [110.43, 32.13]
    }

    const convertData = function (data: any) {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }

    option = {
      backgroundColor: "#fff",
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        y: "bottom",
        x: "right",
        data: ["haidilao"],
        textStyle: {
          color: "#fff"
        }
      },
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#9fd7dd",
            borderColor: "#111"
          },
          emphasis: {
            areaColor: "#8ac2e5'"
          }
        }
      },
      series: [
        {
          name: "地理位置+数量",
          type: "scatter",
          coordinateSystem: "geo",
          data: convertData(dataInfo),

          symbolSize: function (val: any) {
            return val[1] / 4
          },
          label: {
            normal: {
              formatter: "{b}",
              position: "right"
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: "#ddb926",
              areaStyle: {
                color: "#9fd7dd"
              }
            }
          }
        },
        {
          name: "Top 5",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: convertData(
            dataInfo
              .sort(function (a: any, b: any) {
                return b.value - a.value
              })
              .slice(0, 6)
          ),
          symbolSize: function (val: any) {
            return val[1] / 3
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke"
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: "#f4e925",
              shadowBlur: 10,
              shadowColor: "#333"
            }
          },
          zlevel: 1
        }
      ]
    }
  }
  if (type === "line") {
    console.log("1", dataInfo)
    const x = []
    const y = []
    for (const key of dataInfo) {
      x.push(key.name)
      y.push(key.goodsCount)
    }
    option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: x
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: y,
          type: "line",
          areaStyle: {}
        }
      ]
    }
  }
  if (type === "bar") {
    console.log("bar", dataInfo)
    const x = []
    const y = []
    for (const key of dataInfo) {
      x.push(key.goodsFavor)
      y.push(key.name)
    }

    option = {
      xAxis: {
        type: "category",
        data: y
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: x,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)"
          }
        }
      ]
    }
  }
  return option
}
