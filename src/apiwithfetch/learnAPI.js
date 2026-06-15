//fetch => raw data (response)
//data.json() => object
const temp = fetch("http://localhost:8000/users");

temp.then((data) => console.log(data));

temp.then((res) => res.json()).then((data) => console.log(data));

/**
 * Cú pháp:
 * fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data);
    })
        .catch(error => {
        console.error("Có lỗi xảy ra:", error);
    });

    url: Địa chỉ API
    response.json( ) : Chuyển dữ liệu từ JSON sang Object
    .then( ): Xử lý kết quả
    .catch( ): Bắt lỗi nếu có vấn đề
 */
