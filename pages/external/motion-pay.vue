<template>
	<div class="flex h-screen justify-center items-center bg-surface px-3 py-5">
		<div class="max-w-sm" v-if="isShowSuccess">
			<div class="flex flex-col gap-5 items-center">
				<SalutationImage />
				<span class="text-[21px] font-semibold text-center"
					>Selamat anda telah menjadi saksi</span
				>
			</div>

			<div class="card bg-white mt-5 rounded-sm flex flex-col gap-2 py-4 px-3">
				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="charm:person"
						class="text-xl text-primaryblue"
					></iconify-icon>
					<div class="flex flex-col">
						<span>Nama</span>
						<span class="text-primaryblue font-semibold">{{
							user?.full_name
						}}</span>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="solar:user-id-outline"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>NIK</span>
						<span class="text-primaryblue font-semibold">{{ user?.nik }}</span>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="icon-park-outline:announcement"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>NO TPS</span>
						<span class="text-primaryblue font-semibold">{{
							user?.tps_no
						}}</span>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="solar:point-on-map-outline"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>Kelurahan</span>
						<span class="text-primaryblue font-semibold">{{
							user?.kelurahan?.name
						}}</span>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="solar:point-on-map-outline"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>Kecamatan</span>
						<span class="text-primaryblue font-semibold">{{
							user?.kecamatan?.name
						}}</span>
					</div>
				</div>

				<div class="flex gap-2 p-2 items-center">
					<iconify-icon
						icon="mdi:check-bold"
						class="text-primaryred text-xl font-bold"
					></iconify-icon>
					<span class="font-semibold text-sm">
						Telah memenuhi syarat menjadi saksi yang telah disetujui oleh DPP
					</span>
				</div>
				<div class="flex gap-2 p-2 items-center">
					<iconify-icon
						icon="mdi:check-bold"
						class="text-primaryred text-xl font-bold"
					></iconify-icon>
					<span class="font-semibold text-sm">
						Telah menjadi pengguna premium MotionPay
					</span>
				</div>
			</div>

			<div
				class="text-center items-center text-xs p-3 font-normal text-darktext"
			>
				Halaman ini akan tertutup otomatis dalam
				<span class="text-primaryred font-semibold"> {{ countTime }}</span>
				detik
			</div>
		</div>
		<div v-if="!isShowSuccess">
			<Loader />
		</div>
	</div>
</template>

<script setup>
const runtime = useRuntimeConfig();
const route = useRoute();

const user = ref({});

const isShowSuccess = ref(false);
const interval = ref(null);
const countTime = ref(5);

const putStatus = async (referrer) => {
	// if (!referrer) return;
	try {
		const res = await $fetch(`${runtime.public.API}/saksi/saksi/status`, {
			body: {
				referer_url: referrer
				// referer_url: 'https://staging-landing.motionpay.id/'
			},
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${route.query.token}`
			}
		});

		isShowSuccess.value = true;

		getAuthSaksi();
	} catch (error) {
		console.error(error);
		alert(JSON.stringify(error))
	}
};

const getAuthSaksi = async () => {
	const res = await $fetch(`${runtime.public.API}/saksi/auth`, {
		headers: {
			Authorization: `Bearer ${route.query.token}`
		}
	});

	user.value = res;
};

watch(
	() => isShowSuccess.value,
	(val) => {
		if (val) {
			interval.value = setInterval(() => {
				--countTime.value;
				if (countTime.value === 0) clearInterval(interval.value);
			}, 1000);
		}
	}
);
onMounted(() => {
	if (process.client) {
		putStatus(document.referrer);
	}
});
</script>
