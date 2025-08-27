# Home

<script setup>
import { useRouter } from 'vitepress'
import { getLanguage } from '@/helper'

const router = useRouter()
const locale = getLanguage()

router.go(`${router.route.path}${locale}/`)
</script>
