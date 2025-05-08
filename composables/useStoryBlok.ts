export const useStoryBlok = () =>{
    const {$preview} = useNuxtApp()
    const runtimeConfig = useRuntimeConfig()
    const VERSION =  $preview || runtimeConfig.public.APP_SERVER === 'stage' ? 'draft' : 'published'
    const fetchStory = async (slug: string) => {
      const { data } = await useStoryblokApi().get(`cdn/stories/${slug.replace(/\/$/, '')}`, {
        version: VERSION,
      })
      return data?.story || null
    }
    return{
      fetchStory
    }
  
}