<template>
    <div class="content-wrapper">
        <ContentHeader page-title="Início"></ContentHeader>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <BarChart
                                    :chartdata="chartdata"
                                    :options="options"
                                ></BarChart>
                            </div>
                        </div>

                        <div class="card card-primary card-outline">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>

                                <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="m-0">Featured</h5>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title">
                                    Special title treatment
                                </h6>

                                <p class="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="#" class="btn btn-primary"
                                    >Go somewhere</a
                                >
                            </div>
                        </div>

                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h5 class="m-0">Featured</h5>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title">
                                    Special title treatment
                                </h6>

                                <p class="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="#" class="btn btn-primary"
                                    >Go somewhere</a
                                >
                            </div>
                        </div>
                    </div>
                    <!-- /.col-md-6 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
    </div>
</template>

<script>

import BarChart from "../templates/BarChart";
export default {
    title: "SSLTDA - Início",
    components: { BarChart },
    data: () => ({
        chartdata: {
            labels: ["Ruptura", "PontoVenda", "Segurança", "Alto", "Excesso"],
            datasets: [
                {
                    label: "Valor",
                    backgroundColor: [
                        "#4a4e4dbb",
                        " #0e9aa7bb",
                        "#ffa4ffbb",
                        "#f6cd61bb",
                        "#fe8a71bb",
                        "#ff6600bb"
                    ],
                    data: [4752, 2501, 1934, 3472, 6464]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false }
        }
    }),    
};


</script>

<style>

</style>
