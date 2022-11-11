import request from "@/utils/request";

/**
 * @Author ives
 * @Date 2022/10/11 11:09
 * @Desc 模糊查询getMatchingName
 */
export function getMatchingName (data:any) {
  return request({
    url: 'report/matching_name',
    method: 'GET',
    params: data,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
  })
}
