package com.example.app02.api.request; import jakarta.validation.constraints.NotBlank; public record CreateInventoryItemRequest(@NotBlank String name, @NotBlank String status) {}
