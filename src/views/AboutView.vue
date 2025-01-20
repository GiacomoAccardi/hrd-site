<script>
export default {

}
</script>
<template>
    <div class="wrapper-about bg-colors d-flex justify-content-center align-items-center">
        <div class="os-window">
            <div class="upper-bar d-flex align-items-center px-3">
                <div class="bubbles d-flex align-items-center">
                    <div class="os-bt close bg-danger"></div>
                    <div class="os-bt minimize bg-warning"></div>
                    <div class="os-bt reduce bg-secondary"></div>
                </div>
                <p class="text-white mt-3 os-title">About-me.txt</p>
            </div>
            <div class="content-window p-5">
                <pre class="text-success">
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝
                </pre>
                <p class="text-success os-text mb-5">
                    Sono un Web Developer freelance. <br>
                    Mi occupo di realizzare siti web e web-app <br>
                    personalizzate per le tue esigenze! &#128187;<br>
                    <br>
                    Mi sono diplomato in grafica pubblicitaria ed ho portato a termine<br>
                    un corso Boolean di 700 ore come Full-Stack Web Developer! &#128218;<br>
                    <br>
                    Sono nato e cresciuto a Palermo, Sicilia. &#127958;
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.wrapper-about {
    height: 100vh;

    .os-window {
        height: 600px;
        width: 1000px;
        background-color: rgb(19, 19, 19);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        border-radius: 20px;

        .upper-bar {
            background-color: rgb(51, 51, 51);
            height: 40px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;

            .bubbles {
                height: 100%;

                .os-bt {
                    height: 12px;
                    width: 12px;
                    border-radius: 50%;
                    margin-right: 8px;
                }
            }

            .os-title {
                margin-left: 375px;
                font-size: 10pt;
            }
        }

        .content-window {

            pre {
                overflow: hidden;
            }

            p {
                animation: intotxt 4s;
            }

            @keyframes intotxt {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }
        }
    }
}

.os-text {
    font-size: 14pt;
    font-family: Arial, Helvetica, sans-serif;
}

.txt-block {
    border: 5px solid rgb(255, 255, 255);
}

pre {
    animation: imcomin 4s;
}

@keyframes imcomin {
    0% {
        width: 0;
        height: 0;
    }

    100% {
        width: 100%;
        height: 100%;
    }
}
</style>