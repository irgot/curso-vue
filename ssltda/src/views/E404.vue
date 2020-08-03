<template>
    <div class="content-wrapper">
        <ContentHeader page-title="Erro 404"></ContentHeader>
        <div class="content">
            <div class="error-page">
                <h2 class="headline text-warning">404</h2>

                <div class="error-content">
                    <h3>
                        <i class="fas fa-exclamation-triangle text-warning"></i>
                        Oops! Página não encontrada.
                    </h3>

                    <p>
                        Não pudemos encontrar a página solicitada no entanto,
                        você pode
                        <router-link to="/" v-slot="{ href }">
                            <a :href="href">retornar a página inicial</a>.
                        </router-link>
                    </p>
                </div>
                <!-- /.error-content -->
            </div>
            <!-- /.error-page -->
        </div>
    </div>
</template>

<script>
export default {
    title: "404 - Página não encontrada"
};
</script>

<style></style>
