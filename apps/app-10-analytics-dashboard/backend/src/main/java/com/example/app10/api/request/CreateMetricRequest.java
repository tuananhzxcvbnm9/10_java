package com.example.app10.api.request; import jakarta.validation.constraints.NotBlank; public record CreateMetricRequest(@NotBlank String name, @NotBlank String status) {}
