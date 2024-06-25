<script>
import moment from 'moment';

export default {
    name: 'MomentExample',
    methods: { 
        // 格式化日期
        formatDate(dateString) {
            return moment(dateString).format('YYYY-MM-DD HH:mm::ss');
        },
        // 计算相对时间
        fromNow(dateString) {
            return moment(dateString).fromNow();
        },
        // 添加时间
        add_days(dateString, days) {
            return moment(dateString).add(days, 'days').format('YYYY-MM-DD HH:mm::ss');
        },
        // 减去时间
        subtract_hours(dateString, hours) {
            return moment(dateString).subtract(hours, 'hours').format('YYYY-MM-DD HH:mm::ss');
        },
        // 获取具体日期部分
        items(dateString) {
            let date = moment(dateString);
            return [date.year(), date.month(), date.day(), date.hour(), date.minute(), date.second()]
        },
        // 时区处理
        utc(dateString) {
            return moment.utc(dateString).format();
        },
        // 转换为本地时间
        local(dateString) {
            return moment(dateString).local().format();
        },

        // 比较
        isSameDay(date1, date2) {
            return moment(date1).isSame(date2, 'day')
        },
        // date1 是否早于 date2
        isBefore(date1, date2) {
            return moment(date1).isBefore(date2)
        },
         // date1 是否晚于 date2
        isAfter(date1, date2) {
            return moment(date1).isAfter(date2)
        }
    }
}
</script>