import { orderContant } from "./contant";

export const isJsonString = (data) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false
    }
    return true
}

export const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const renderOptions = (arr) => {
    let results = []
    if(arr) {
        results = arr?.map((opt) => {
            return {
                value: opt,
                label: opt
            }
        })
    }
    results.push({
        label: 'Thêm type',
        value: 'add_type'
    })
    return results
}

export const convertPrice = (price) => {
    try {
        const result  = price?.toLocaleString().replaceAll(',', '.')
        return `${result} VND`
    } catch (error) {
        return null
    }
}

export const initFacebookSDK = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    let locale = "vi_VN";
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FB_ID,// You App ID
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.1" // use version 2.1
      });
    };
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  export const convertDataChart = (data, type) => {
    try {
        const object = {}
        Array.isArray(data) && data.forEach((opt) => {
            if(!object[opt[type]]) {
                object[opt[type]] = 1
            } else {
                object[opt[type]]+=1
                console.log('c;getBase64', object[opt[type]], typeof(object[opt[type]]))
            }
        })
        const results = Array.isArray(Object.keys(object)) && Object.keys(object).map((item) => {
            return {
                name: orderContant.payment[item],
                value: object[item]
            }
        })
        return results
    }catch(e) {
        return []
    }
  }

  // export const convertProductDataChart = (orders) => {
  //   const productCount = {};
  
  //   // Duyệt qua các đơn hàng để đếm số lượng sản phẩm theo category
  //   orders?.forEach(order => {
  //     order?.orderItems?.forEach(item => {
  //       const category = item?.product?.type; // Lấy category của sản phẩm từ orderItem
  //       console.log("category", category)
  //       if (category) {
  //         // Nếu chưa có category này trong productCount, tạo mới
  //         if (!productCount[category]) {
  //           productCount[category] = 0;
  //         }
  //         // Cộng thêm số lượng sản phẩm vào category tương ứng
  //         productCount[category] += item.amount; // amount là số lượng của sản phẩm
  //       }
  //     });
  //   });
  
  //   // Chuyển đổi object thành mảng kết quả cho PieChart
  //   const results = Object.entries(productCount).map(([category, quantity]) => ({
  //     name: category,  // Tên category
  //     value: quantity, // Số lượng sản phẩm trong category đó
  //   }));
  
  //   return results;
  // };
  
  
  export const convertProductDataChart = (orders) => {
    const result = {};
    orders?.forEach(order => {
      order?.orderItems?.forEach(item => {
        result[item.name] = (result[item.name] || 0) + item.amount;
      });
    });
  
    return Object.entries(result).map(([name, value]) => ({
      name,
      value
    }));
  };
  