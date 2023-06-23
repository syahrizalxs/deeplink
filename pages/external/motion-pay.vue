<template>
	<div class="flex h-screen justify-center items-center bg-surface px-3 py-5">
		<div class="max-w-sm">
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
						<span class="text-primaryblue font-semibold"
							>Syahrizal Setiawan</span
						>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="solar:user-id-outline"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>NIK</span>
						<span class="text-primaryblue font-semibold">3175051811950005</span>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="ant-design:number-outlined"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>NO TPS</span>
						<span class="text-primaryblue font-semibold">130</span>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="solar:point-on-map-outline"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>Kelurahan</span>
						<span class="text-primaryblue font-semibold">Kalisari</span>
					</div>
				</div>

				<div class="flex gap-2 border-b border-gray-200 p-2">
					<iconify-icon
						icon="solar:point-on-map-outline"
						class="text-xl text-primaryblue font-bold"
					></iconify-icon>
					<div class="flex flex-col">
						<span>Kecamatan</span>
						<span class="text-primaryblue font-semibold">Pasar Rebo</span>
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
		</div>
	</div>
</template>

<script setup>
onMounted(() => {
	if (process.client) {
		console.log('doc', { document });
		console.log('ref', document.referrer);
	}
});
</script>
