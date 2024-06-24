<script>
import moment from 'moment';

export default {
    name: 'MomentExample',
    methods: { 
        formatDate(dateString) {
            return moment(dateString).format('YYYY-MM-DD HH:mm::ss');
        }
    }
}
</script>