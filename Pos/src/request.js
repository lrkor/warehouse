import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
const request = {
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */

  axiosGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then(response => {
          if (response.data.code == '200') {
            resolve(response.data);
          } else {
            this.$message({
              message: response.data.message,
              type: 'warning'
            });
          }
        })
        .catch(error => {
          this.$message({
            message: '网络错误!',
            type: 'error'
          });
          reject(error)
        })
    })
  },

  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  axiosPost(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          if (response.data.code == '200') {
            resolve(response.data);
          } else {
            this.$message({
              message: response.data.message,
              type: 'warning'
            });
          }
        }, err => {
          this.$message({
            message: '网络错误!',
            type: 'error'
          });
          reject(err)
        })
    })
  }
};
module.exports = request;
