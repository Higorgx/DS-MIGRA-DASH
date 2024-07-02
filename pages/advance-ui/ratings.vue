<script>

import appConfig from "~/app.config";

import StarRating from 'vue-star-rating';
import prismMixin from '~/mixins/prism.js'

export default {
    page: {
        title: "Ratings",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Ratings",
            items: [
                {
                    text: "Advance UI",
                    href: "/",
                },
                {
                    text: "Ratings",
                    active: true,
                },
            ],
            badge: 2,
            basic: 4,
            animation: 3,
            rounded: 2,
            glow: 4,
            custom: 3,
            reset: 5,
        };
    },
    methods: {
        resetStar() {
            this.reset = 0;
        }
    },
    components: {
        StarRating
    },
    mixins: [prismMixin],
};
</script>

<template>
    <PageHeader :title="title" :items="items" />

    <BRow>
                <BCol lg="12">
                    <BCard no-body>
                        <BCardHeader class="align-items-center d-flex">
                            <BCardTitle class="mb-0 flex-grow-1">vue-star-rating</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted">A simple, highly customisable star rating component for Vue 2.x. / 3.x.</p>
                            <div class="live-preview">
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Title</th>
                                                <th scope="col">Example</th>
                                                <th scope="col">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Basic Ratting</th>
                                                <td>
                                                    <star-rating v-model:rating="basic" :show-rating="false" :star-size="25"></star-rating>
                                                </td>
                                                <td>
                                                    <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="basic" :show-rating="false" :star-size="25">&lt;/star-rating></code></pre>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Ratting with Animation</th>
                                                <td>
                                                    <star-rating v-model:rating="animation" :show-rating="false" :star-size="25" :animate="true"></star-rating>
                                                </td>
                                                <td>
                                                    <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="animation" :show-rating="false" :star-size="25" :animate="true">&lt;/star-rating></code></pre>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rounded Corner Rating</th>
                                                <td>
                                                    <star-rating v-model:rating="rounded" :show-rating="false" :star-size="25" :rounded-corners="true"></star-rating>
                                                </td>
                                                <td>
                                                    <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="rounded" :show-rating="false" :star-size="25" :rounded-corners="true">&lt;/star-rating></code></pre>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style="min-width: 300px;" scope="row">Rating with Glow</th>
                                                <td>
                                                    <star-rating v-model:rating="glow" :show-rating="false" :star-size="25" :glow="10" glow-color="#3762ea"></star-rating>
                                                </td>
                                                <td>
                                                    <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="glow" :show-rating="false" :star-size="25" :glow="10" glow-color="#3762ea">&lt;/star-rating></code></pre>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rating with Badge</th>
                                                <td>
                                                    <star-rating v-model:rating="badge" :show-rating="false" :star-size="25">
                                                    </star-rating>
                                                    <span class="ratingnum badge bg-info align-middle mt-2">{{ badge }}</span>
                                                </td>
                                                <td>
                                                    <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="badge" :show-rating="false" :star-size="25">&lt;/star-rating>
&lt;span class="ratingnum badge bg-info align-middle mt-2"> badge model&lt;/span></code></pre>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">With Custom Color</th>
                                                <td>
                                                    <star-rating v-model:rating="custom" :show-rating="false" :star-size="25" :active-color="['#3762ea']"></star-rating>
                                                </td>
                                                <td>
                                                    <pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="custom" :show-rating="false" :star-size="25" :active-color="['#3762ea']">&lt;/star-rating></code></pre>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Clear/Reset Rater</th>
                                                <td>
                                                    <div dir="ltr">
                                                        <star-rating v-model:rating="reset" :show-rating="false" :star-size="25"></star-rating>
                                                        <BButton id="raterreset-button" variant="light" size="sm" class="mt-2" @click="resetStar">Reset</BButton>
                                                    </div>
                                                </td>
                                                <td><pre class="mb-0"><code class="language-markup">&lt;star-rating v-model:rating="reset" :show-rating="false" :star-size="25">&lt;/star-rating>
&lt;BButton id="raterreset-button" variant="light" size="sm" class="mt-2" @click="resetStar">Reset&lt;/BButton></code></pre>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>

                            <div class="d-none code-view">
                                <pre><code class="language-markup">&lt;div data-simplebar style=&quot;max-height: 220px;&quot;&gt;
...
&lt;/div&gt;</code></pre>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
</template>